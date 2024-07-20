import MainRouter from "./router/MainRouter.jsx";
import createApolloClient from "./graphql/apolloClient.jsx";
import {ApolloProvider} from "@apollo/client";
import {Provider} from "react-redux";
import {store} from "./redux/store.jsx";

const App = () => {
    const apolloClient = createApolloClient();

    return (
        <ApolloProvider client={apolloClient}>
            <Provider store={store}>
                <MainRouter/>
            </Provider>
        </ApolloProvider>
    )
}

export default App
