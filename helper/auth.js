
const adminOROwner = ({ existingItem, authentication: { item } }) => {
    
    if(item) {
        return (item.isAdmin || item.id === existingItem.id) ? true : false;
    }

    return false;
}

const onlyAdmin = ({ authentication: { item } }) => {

    if(item && item.isAdmin) {
        return true;
    }
    return false;
}

module.exports = { onlyAdmin, adminOROwner }