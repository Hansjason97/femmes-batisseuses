// app/studio/new/page.tsx
import { revalidatePath } from "next/cache";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { redirect } from "next/navigation";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function uploadPreview(file: File | null) {
  "use server";
  if (!file || file.size === 0) return null;
  const supabase = supabaseAdmin();
  const ext = file.name.split(".").pop() || "jpg";
  const path = `covers/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const { error } = await supabase.storage.from("blog").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("blog").getPublicUrl(path);
  return data.publicUrl;
}

export default function NewArticlePage() {
  async function createArticle(formData: FormData) {
    "use server";
    const supabase = supabaseAdmin();

    const title = (formData.get("title") as string)?.trim();
    const slugInput = (formData.get("slug") as string)?.trim();
    const excerpt = (formData.get("excerpt") as string)?.trim();
    const content = (formData.get("content") as string) ?? "";
    const datePublishedRaw = (formData.get("date_published") as string) || "";
    // <input type="datetime-local"> renvoie "YYYY-MM-DDTHH:mm"
    const datePublishedISO = datePublishedRaw
      ? new Date(datePublishedRaw).toISOString()
      : new Date().toISOString();

    let previewImage = (formData.get("preview_image") as string)?.trim() || "";
    const previewFile = formData.get("preview_file") as File | null;
    if (!previewImage && previewFile) {
      previewImage = (await uploadPreview(previewFile)) || "";
    }

    if (!title || !excerpt || !content) {
      throw new Error("Champs requis manquants");
    }

    const computedSlug = slugInput || slugify(title);

    const { data, error } = await supabase
      .from("articles")
      .insert({
        title,
        slug: computedSlug,                 // le trigger DB peut aussi le générer si vide
        excerpt,
        content,                            // HTML ou Markdown selon ton choix
        preview_image: previewImage || null,
        date_published: datePublishedISO,   // sert aussi de published
      })
      .select("slug")
      .single();

    if (error) throw new Error(error.message);

    // Revalider les pages publiques
    revalidatePath("/blog");
    revalidatePath(`/blog/${data.slug}`);

    // Rediriger vers l’article créé
    redirect(`/blog/${data.slug}`);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Nouvel article</h1>
      <form action={createArticle} className="space-y-5">
        <div>
          <label className="block text-sm font-medium">Titre</label>
          <input name="title" required className="mt-1 w-full rounded border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">
            Slug <span className="text-zinc-500">(optionnel)</span>
          </label>
          <input name="slug" placeholder="ex: hello-supabase-blog" className="mt-1 w-full rounded border px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium">Extrait</label>
          <textarea name="excerpt" required rows={3} className="mt-1 w-full rounded border px-3 py-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">
              Date de publication <span className="text-zinc-500">(par défaut: maintenant)</span>
            </label>
            <input type="datetime-local" name="date_published" className="mt-1 w-full rounded border px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">
              URL image de prévisualisation <span className="text-zinc-500">(ou uploade un fichier)</span>
            </label>
            <input name="preview_image" placeholder="https://..." className="mt-1 w-full rounded border px-3 py-2" />
            <div className="mt-2">
              <input type="file" name="preview_file" accept="image/*" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Contenu (HTML ou Markdown)</label>
          <textarea name="content" required rows={14} className="mt-1 w-full rounded border px-3 py-2 font-mono" />
        </div>

        <button className="rounded bg-black text-white px-4 py-2">Publier</button>
      </form>
    </div>
  );
}
