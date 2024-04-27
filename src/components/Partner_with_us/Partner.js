import './partner.css';

function Partner() {
    return (
        <>
            <footer>
                <div className="text-center1 p-3" >
                    <div style={{ marginBottom: '1rem' }}>
                        {/* <img src="https://rcmsar.com/wp-content/uploads/Royal-Canadian-Marine-Search-And-Rescue-Footer-Background.jpg" alt="Logo" style={{ width: '150px' }} /> */}
                    </div>
                    <center>
                        <div style={{ marginBottom: '1rem' }} className="ourClass">
                            <p>
                                Address: Galgotias College of Engineering and Technology, Greater Noida, India<br />
                                Phone: +91 1234567890<br />
                                Email: angadaan@gmail.com
                            </p>
                        </div>

                        <p style={{ marginBottom: '0', color: '#888' }} className="ourClass">
                            © 2024 Anga-Daan. All rights reserved.
                        </p>
                       
                    </center>
                </div>
            </footer>

        </>
    );
}

export default Partner;
