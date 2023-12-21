const BoardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className='w-full min-h-screen flex'>
      {children}
    </main>
  );
};

export default BoardLayout;
