import { Link } from "react-router-dom";

const ProductSingle = ({title, price, imgUrl,linkProduct}) =>{
    function currencyFormat(num) {
        return 'Rp.' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
    <div className="xl:w-40 mx-4 py-3">
        <div className="relative overflow-hidden">
            <div className="group xl:h-40">
                <img src={imgUrl} alt="Cover Image" className=" object-contain object-center transition-transform duration-300 transform-gpu group-hover:scale-105 group-hover:opacity-50 group-hover:cursor-pointer"/>
                <Link to={linkProduct}>
                <div className="absolute p-4 w-full inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:cursor-pointer">
                    <div className="px-2 text-white w-full">
                        <h2 className="text-md font-semibold">{title}</h2>
                        <p className="text-sm">{currencyFormat(price)}</p>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </div>
    )
}
export default ProductSingle;