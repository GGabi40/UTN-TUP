const logger = (req, res, next) => {
    // al hacer un get: envía este mensaje:
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    // ejemplo si todo sale bien: [2025-04-04T15:35:00.123Z] GET /

    next(); // si no se llama: se queda trabada
}

export default logger;