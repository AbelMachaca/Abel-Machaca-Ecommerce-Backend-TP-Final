export let cartDao

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
        const { default: CartDaoMemory } = await import("./cartDaoMemory.js")
        cartDao = new CartDaoMemory();
        break;
}