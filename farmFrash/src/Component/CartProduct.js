import Button from '@mui/material/Button/index';
import DeleteIcon from '@mui/icons-material/Delete';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Input from '@mui/material/Input';

export default function CartProduct(props, key) {
    return (
        <>
            <div className='product-card' key={key}>
                <img src={props.src} alt={props.title} className='card_img' />
                <div className='product-info'>
                    <span className='product-title'>{props.title}</span><br />
                    <span className='product-price'>₹{props.price} /KG</span>
                </div>
                <div className="product-totalprice">
                    Total: ₹{props.price * props.qty}
                </div>
                <div className="cart-btn">
                    <Button
                        variant="contained" color="success"
                        size="medium" startIcon={<DeleteIcon />} className="remove"
                        onClick={props.remove}
                    />
                    <ButtonGroup aria-label="contained medium button group">
                        <Button
                            id={props.qty <= 1 ? 'dark' : 'light'}
                            variant="contained" size="medium"
                            startIcon={<RemoveIcon />}
                            onClick={props.decrement}
                        />
                        <Input
                            id="qty"
                            type="number"
                            value={props.qty}
                            variant="filled" color="success"
                            min={1} max={5}
                            onChange={props.updateQty}
                        />
                        <Button
                            id={props.qty >= 5 ? 'dark' : 'light'}
                            variant="contained"
                            size="medium"
                            startIcon={<AddIcon />}
                            onClick={props.increment}
                        />
                    </ButtonGroup>
                </div>
            </div>
        </>
    )
}