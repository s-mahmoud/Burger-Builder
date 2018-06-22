import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const orderSummery = (props) => {
    const ingredientSummery = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                     <span style={{textTransform: 'capitlize'}}>{igKey}</span> : {props.ingredients[igKey]} 
                </li>
            );
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious with the following ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCanceled} btnType="Danger">Cancel</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">Continue</Button>
        </Aux>
    );
}

export default orderSummery;