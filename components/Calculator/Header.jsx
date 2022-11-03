export default function Header() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex">
          <h1 className="text-3xl text-theme1-header-text">Calculator</h1>
        </div>
        <div className="flex justify-end gap-7">
          <p>theme</p>
          <p>toggle</p>
        </div>
      </div>
    </>
  );
}
