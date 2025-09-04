type Props = { name: string; size: string; href?: string };
export default function FileChip({ name, size, href = "#" }: Props) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-line hover:border-primary text-sm"
    >
      <span className="w-5 h-5 rounded bg-lightBlue" />
      <span className="font-medium">{name}</span>
      <span className="text-textSecondary">· {size}</span>
      <span className="ml-2 text-primary">Завантажити</span>
    </a>
  );
}
