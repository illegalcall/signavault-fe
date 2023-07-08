export const ItemPrimary = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex gap-1 items-center flex-col">
      <span>{value}</span>
      <span className="text-sm text-muted-foreground">{title}</span>
    </div>
  );
};

export const ItemSecondary = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex justify-between">
      <span className="text-sm text-muted-foreground">{title}</span>
      <span>{value}</span>
    </div>
  );
};
