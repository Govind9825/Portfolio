export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-[8vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
        <div className="flex justify-center items-center">
          <div className="text-xs sm:text-sm text-pink-600 text-center w-full">
            © {currentYear} Govind Bhatter. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
