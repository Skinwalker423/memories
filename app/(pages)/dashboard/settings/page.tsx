import React from "react";

const SettingsPage = () => {
  return (
    <div className='h-screen w-full justify-center items-center space-y-10 mt-10 px-10'>
      <h1 className='text-3xl'>Settings</h1>
      <div className='flex flex-col h-full gap-3'>
        <div className='px-4 py-2 border border-secondary'>
          Seeting 1
        </div>
        <div className='px-4 py-2 border border-secondary'>
          Seeting 2
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
