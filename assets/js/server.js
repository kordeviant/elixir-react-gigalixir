const ReactRender = require('react_render/priv/server');
import {Helmet} from "react-helmet";

const helmet = Helmet.renderStatic();
ReactRender.startServer();
