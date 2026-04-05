export default function ErrorHandler(err, req, res, next)
{
    console.error(err);
    return res.status(err.status || 500).json({message: err.message || "Internal Server Error"});
}