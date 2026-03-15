export default function Footer() {
  return (
    <footer className="py-12 mt-auto text-center text-slate-500 text-sm bg-black border-t border-white/5 z-20 relative">
      <p>
        © {new Date().getFullYear()} AUC Education Course E-Portfolio. All
        rights reserved.
      </p>
    </footer>
  );
}
