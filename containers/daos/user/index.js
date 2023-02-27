export let userDao

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
        const { default: UserDaoMemory } = await import("./userDaoMemory.js")
        userDao = new UserDaoMemory();
        break;
}