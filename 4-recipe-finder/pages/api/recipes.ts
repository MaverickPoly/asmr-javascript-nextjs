import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";
import {Dispatcher} from "undici-types";
import ResponseData = Dispatcher.ResponseData;

const API_URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "8601d6572a234f3ea35861636ba46fb4";

const GET = async (query: string | string[] | undefined) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                apiKey: API_KEY,
                query: query,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw new Error("Failed to fetch data");
    }
};

export default async function handler(
    req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const { method, query } = req;

    switch (method) {
        case "GET":
            try {
                const results = await GET(query.q);
                return res.status(200).json(results);
            } catch (err) {
                console.error(err);
                // @ts-ignore
                return res.status(500).json({ error: "Internal Server Error" });
            }
        default:
            res.setHeader("Allow", ["GET"]);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
}
