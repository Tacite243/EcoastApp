

export default function Right() {
    return (
        <div className="right">
            <div className="top">
                <button id="menu-btn">
                    <img src="../assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
                </button>
                <div className="profile">
                    <div className="info">
                        <p>Hey, <b>Tacite</b></p>
                        <small className="text-muted">Admin</small>
                    </div>
                </div>
            </div>

            <div className="recent-updates">
                <h2>Récemment</h2>
                <div className="updates">
                    <div className="update">
                        <div className="profile-photo">
                            {/* <img src="../icons/person_2_FILL0_wght400_GRAD0_opsz24.svg" alt="phtoto de profile"> */}
                        </div>
                        <div className="message">
                            <p><b>Ir Jason</b> a reçu sa facture de cable yulan</p>
                            <small className="text-muted">2 minutes</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            {/* <img src="../icons/person_2_FILL0_wght400_GRAD0_opsz24.svg" alt="phtoto de profile"> */}
                        </div>
                        <div className="message">
                            <p><b>Ir Larson</b> a reçu sa facture de cable yulan</p>
                            <small className="text-muted">2 minutes</small>
                        </div>
                    </div>
                    <div className="update">
                        <div className="profile-photo">
                            {/* <img src="../icons/person_2_FILL0_wght400_GRAD0_opsz24.svg" alt="phtoto de profile"> */}
                        </div>
                        <div className="message">
                            <p><b>Ir Jackson</b> a reçu sa facture de cable yulan</p>
                            <small className="text-muted">2 minutes</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-------------------- RECENT UPDATE END ---------------------> */}

            <div className="sales-analytics">
                <h2>Statistics</h2>
                <div className="item online">
                    <div className="icon">
                        {/* <img src="../icons/shopping_cart_FILL0_wght400_GRAD0_opsz24.svg" alt=""> */}
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>ONLINE ORDERS</h3>
                            <small className="text-muted">Dernières 24 Heures</small>
                        </div>
                    </div>
                    <h5 className="succes">+39%</h5>
                    <h3>3849</h3>
                </div>
                <div className="item offline">
                    <div className="icon">
                        {/* <img src="../icons/local_mall_FILL0_wght400_GRAD0_opsz24.svg" alt=""> */}
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>OFFLINE ORDERS</h3>
                            <small className="text-muted">Dernières 24 Heures</small>
                        </div>
                    </div>
                    <h5 className="danger">-17%</h5>
                    <h3>1100</h3>
                </div>
                <div className="item customers">
                    <div className="icon">
                        {/* <img src="../icons/person_2_FILL0_wght400_GRAD0_opsz24.svg" alt=""> */}
                    </div>
                    <div className="right">
                        <div className="info">
                            <h3>NOUVEAUX CLIENTS</h3>
                            <small className="text-muted">Dernières 24 Heures</small>
                        </div>
                    </div>
                    <h5 className="succes">+25%</h5>
                    <h3>849</h3>
                </div>
            </div>
        </div>
    )
}