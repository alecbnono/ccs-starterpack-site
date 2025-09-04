function Footer() {
  const d = new Date();

  return (
    <footer className="flex justify-center items-center p-2 w-full">
      <h1 className="text-slate-50">
        &copy; {d.getFullYear()} Tech by Alec. All Rights Reserved.
      </h1>
    </footer>
  );
}

export default Footer;
