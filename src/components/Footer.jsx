function Footer() {
    return (
        <>
            

            {/* Footer */}
            <footer className="bg-gray-600 text-white p-5">
    <img src="logo.png" alt="Logo" className="h-20 mx-15" />
    <div className="container mx-auto flex flex-col md:flex-row gap-65">
        <div className="footer-section">
           <p> Your companion for a healthier</p>
           <p> lifestyle through better nutrition</p>
            <p> tracking</p>
        </div>
        <div className="footer-section">
            <h3 className="text-lg font-bold py-4">Features</h3>
            <p>Meal Planning</p>
            <p> Nutrition Analysis</p>
            <p>Weight Tracking</p>
            <p>Fitness Integration</p>
        </div>
        <div className="footer-section mp-10">
            <h3 className="text-lg font-bold py-4">Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p> Blog</p>
        </div>
        <div className="footer-section">
            <h3 className="text-lg font-bold py-4">Legal</h3>
            <p> Terms of Service</p>
            <p> Privacy Policy </p>
            <p>Cookie Policy</p>
            <p>GDPR</p>
        </div>
    </div>
    <p className="text-center p-10">© 2025 NutriTracker. All rights reserved
    </p>
</footer>

        </>
    );
}

export default Footer;