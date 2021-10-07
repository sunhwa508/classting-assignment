interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return <div>{children}</div>;
};

export { AppLayout };
