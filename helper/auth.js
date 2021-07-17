
const adminOROwner = ({ existingItem, authentication: { item } }) => {
    return Boolean(item.isAdmin || existingItem.id === item.id);
}

const onlyAdmin = ({ authentication: { item } }) => {

    if(item.isAdmin === 'undefined' || !item.isAdmin || item.isAdmin === null) {
        return false;
        throw new Error('Access Denied');
    }
    return Boolean(item.isAdmin);
}

module.exports = { onlyAdmin, adminOROwner }