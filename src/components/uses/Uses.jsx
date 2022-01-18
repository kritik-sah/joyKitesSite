import React from "react";

const Uses = () => {
  return (
    <>
    <div className="bg-dark text-white">
    <div id="usage" className="container mt-5 py-5">
        <div className="row gy-4">
            
            <div className="col-md-6 d-flex flex-column justify-content-around">
                <div className="container my-2">
                    <h3 className="fs-3 ">USE CASE OF JOY KITES</h3>
                    <p className="my-2">
                        Yes, We are creating a decentralized freelance Marketplace like fiverr, but we are not using Joy Kites directly, insted we will be using funds from joy kites to build cryptolancer.in and when we launch our DAO token, from our initial supply we will airdrop 10% of it to our partnered NFT's Collections including "JOY KITES".
                    </p>
                    <p className="my-2">
                        Beside the above 10% we will give extra upto 5% newly minted reward in our DAO token on each Purchase(Clients) or Sell(Freelancer) if you are an Hodler of our NFTs.
                    </p>
                    <p className="my-2">
                        With this type of minting, our token price will not degenarate quickly.
                    </p>
                </div>
                <div className="container my-2">
                    <h3 className="fs-3">Cryptolancer.in Plan</h3>
                    
                    <p className="my-2">
                        Cryptolancer.in will have multiple features like Escrow service, DeFi , DAO (Votings and transparency). and most Importantly we will provide a platform to connect freelancer and Cliets.
                    </p>
                    <p className="fs-4 my-4">
                        Why Cryptolancer? and what problem we will be solving?
                    </p>
                    <ul className="list-group">
                        <li className="list-group-item">With the help of smart contracts we will be replacing banks and Payment gateways, since we will be using Polygon (L2 solution on ETH) the gas price will be automaticly reduced. well suted for our needs.</li>
                        <li className="list-group-item">We will be connecting you with a freelace tallent, and with this i hope many new crypto user will start their crypto journey, Since many of us dont want to put real money at first so they can earn from cryptolancer and use the other dapps</li>
                    </ul>

                    <div className=" d-block d-md-flex align-items-center my-2">
                    <img src="./kritik.gif" alt="" style={{height:"80px", width:"80px"}} className="rounded-circle border border-danger m-2 ms-0" />

                    <p className="my-2">
                        Hi its Kritik here, Cryptolancer.in is in development and testing phase, so the plan may change in future. you can check out the below links.
                    </p>
                    </div>

                    {/* <a href="https://www.instagram.com/kritik.sah/" className="btn btn-warning me-2" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                        &nbsp; @kritik.sah
                    </a> */}
                    <a href="https://test.cryptolancer.in" className="btn btn-success me-2" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link-45deg" viewBox="0 0 16 16">
                            <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                            <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                        </svg>
                        &nbsp; Cryptolancer.in
                    </a>
                    <a href="https://drive.google.com/file/d/12baBQtMmsUcHhaRRtfSalu-V4hSh60lF/view?usp=sharing" className="btn btn-danger me-2" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16">
                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z"/>
                        </svg>
                        &nbsp; Download .PDF
                    </a>
                    
                </div>
                
                
            </div>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <img src="./cryptolancer-plan.jpg" alt="Cryptolancer plan" style={{maxHeight:"80vh"}} className="img-fluid rounded"/>
            </div>
        </div>
    </div>
    </div>
    </>
  );
};

export default Uses;
