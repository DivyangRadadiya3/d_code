import Button from '@mui/material/Button/index';
import AddToCartIcon from '@mui/icons-material/AddShoppingCart';

export default function HomeProduct(props, key) {
    return (
        <>
                <div className='product-card' key={key}>
                    <img src={props.imgs} alt={props.title} className='card_img' />
                    <div className="bottom-left">
                        <div className='prduct-infoo'>
                            <span className='product-title'> {props.title} </span><br />
                            <p className='product-price'> ₹{props.price} /KG</p>
                        </div>
                        <div className="btn">
                            <Button
                                variant="contained" color="success"
                                size="medium" startIcon={<AddToCartIcon />}
                                title="ADD_ITEM"
                                onClick={props.onClick} >
                                Add Item
                            </Button>
                        </div>
                    </div>
                </div>
        </>
    )
}