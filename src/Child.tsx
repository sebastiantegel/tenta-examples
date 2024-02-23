type ChildProps = {
  change: () => void;
};

export const Child = ({ change }: ChildProps) => {
  return <div onClick={change}>Barnkomponent</div>;
};
