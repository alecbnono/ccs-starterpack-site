function Footer() {
  const d = new Date();

  return (
    <footer className="flex justify-center items-center p-2 w-full bg-slate-950">
      <h1>&copy; {d.getFullYear()} Tech by Alec. All Rights Reserved.</h1>
    </footer>
  );
}

export default Footer;
