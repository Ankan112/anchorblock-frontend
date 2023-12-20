const UnderMaintenance = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl">{title} page is Under Maintenance!</h1>
    </div>
  );
};

export default UnderMaintenance;
