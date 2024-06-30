const BoardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className='w-full min-h-screen'>{children}</main>
  );
};

export default BoardLayout;
