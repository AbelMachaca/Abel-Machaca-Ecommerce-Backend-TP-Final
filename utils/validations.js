export function requiredField( field ){
    if(!field) throw new Error("MISSING_REQUIRED_PARAM")
    return field
}