import { MarkdownRenderer } from "@/components/ui/markdownRenderer/MarkdownRenderer";
import { getDictionary } from "@/utils/getTranslation";

export default async function PrivacyPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const { lang, slug } = await params;
  const dict = await getDictionary(lang);
  const content = dict.legal[slug];
  
  return (
    <section className="max-w-4xl mx-auto px-6 pt-30 pb-16 text-white">
      <h1 className="text-3xl font-bold mb-6">{content.title}</h1>

      <p className="leading-relaxed">
        <MarkdownRenderer content={content.content} />
      </p>
    </section>
  );
}
