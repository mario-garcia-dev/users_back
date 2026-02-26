import { envs } from './config/envs';
import { AppRoutes } from './presentation/router/app.routes';
import { Server } from "./presentation/server"

const main = () => {
    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    });

    server.start();
}

(() => {
    main();
})();