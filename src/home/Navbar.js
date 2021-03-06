/*
1. Notice the specific reactstrap imports, we're only grabbing what we need from the file.  If you're curious to learn more about <Navbar> and <NavbarBrand> from Reactstrap, take a look here for the Reactstrap docs:
https://reactstrap.github.io/components/navbar/ (Links to an external site.)
and feel free to take a look here for more information on the component bootstrap has built in:  https://getbootstrap.com/docs/4.0/components/navbar/ (Links to an external site.)
2. Our arrow function component is named Sitebar simply to avoid a naming conflict with the <Navbar> we use from bootstrap.
3. Notice we are rendering a single parent element, <Navbar>, in this case, which holds the child element <NavbarBrand>. React enforces this 1-parent rule for all of its components.
*/
import React, {useState} from 'react';
import { //1
    Navbar,
    NavbarBrand,
} from 'reactstrap';

const Sitebar = (props) => { //2
//3
return (
    <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">Workout Log</NavbarBrand>
    </Navbar>
)
}

export default Sitebar;