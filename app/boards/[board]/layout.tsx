const BoardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className='w-full min-h-screen flex '>
      <div className='w-60 min-h-screen bg-neutral-100 hidden md:block'>
        <div>Sidebar</div>
      </div>
      {children}
    </main>
  );
};

export default BoardLayout;
