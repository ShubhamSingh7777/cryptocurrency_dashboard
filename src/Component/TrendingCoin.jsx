import React from 'react'
import millify from "millify";
import '../styles/TrendingCoin.css'
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
const TrendingCoin = ({ coin }) => {
    const Down = coin.price_change_percentage_24h < 0;
    return (
        <>
            <div className="main_div_of_trending_coin">
                <div className="trending_coin">
                    <div className="coins">
                        <div className="left_side_of_coin">
                            <div className="img_of_coin"><img src={coin.image} alt="" width="30px" /><div className='coin_name'>{coin.name}</div></div>
                            <div className='market_cap'>
                                <p className='market_cap'>Mkt.Cap ${millify(coin.market_cap)}</p>
                            </div>
                        </div>
                        <div className="right_side_of_coin">
                            <div className='percentage_cap'><span>
                                {Down ? (
                                    <ArrowDropDownOutlinedIcon color="error" fontSize="small" />
                                ) : (
                                    <ArrowDropUpOutlinedIcon color="success" fontSize="small" />
                                )}
                            </span> {coin.price_change_percentage_24h.toFixed(4)}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingCoin