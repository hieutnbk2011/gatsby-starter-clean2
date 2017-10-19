import { Route, Redirect } from 'react-router'
const BasicRedirect = () => (
<Route exact path="/netlify/anything" render={() => (

    <Redirect to="https://www.google.com/search?q=anything"/>

)}/>
)
export default BasicRedirect
