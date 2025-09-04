export default function SectionHeading({
  id,
  title,
  subtitle,
}: {
  id: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div id={id} className="container scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
      {subtitle && <p className="text-textSecondary mt-2">{subtitle}</p>}
    </div>
  );
}
