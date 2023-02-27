export let productDao

switch ( "memory" ) {
    case "json":
        console.log("Entra JSON")
        break;
    case "firebase":
        console.log("Entra firebase")
        break;
    case "mongodb":
        console.log("Entra mongodb")
        break;
    default:
        const { default: ProductDaoMemory } = await import("./productDaoMemory.js")
        productDao = new ProductDaoMemory();
        break;
}