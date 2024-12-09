import UseFetch from "./useFetchHook"


export default function UseFetchTest() {


    const { data, error, pending } = UseFetch('https://dummyjson.com/products', {});

    console.log(error, data, pending);

    return <div>
        <h1>Use Fetch Test</h1>
        {
            pending ? <h2>Loading...</h2> : null
        }
        {
            error ? <h2>{error}</h2> : null
        }
        {
            data && data.products && data.products.length
                ? data.products.map((productItem) => (
                    <p key={productItem.key}>{productItem.title}</p>
                ))
                : null
        }


    </div>
}