// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleException = (res: any, err: any) => {
    if (err.response) {
        return res.status(err.response.body.statusCode).send(err.response.body?.error);
    }
    return res.status(500).send(err?.message, err?.status);
};