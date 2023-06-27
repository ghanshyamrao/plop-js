import {authRole} from '../../../shared/constants/AppEnums';

export const getUserFromAuth0 = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.sub,
      displayName: user.name,
      email: user.email,
      photoURL: user.picture,
      role: authRole.user,
    };
  return user;
};

export const getUserFromFirebase = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.uid,
      displayName: user.displayName ? user.displayName : 'Crema User',
      email: user.email,
      photoURL: user.photoURL ? user.photoURL : '/assets/images/avatar/A11.jpg',
      role: authRole.user,
    };
  return user;
};
export const getUserFromAWS = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.username,
      displayName: user.attributes.name ? user.attributes.name : 'Crema User',
      email: user.attributes.email,
      photoURL: user.photoURL,
      role: authRole.user,
    };
  return user;
};

export const getUserFromJwtAuth = (user) => {
  if (user)
    return {
      id: user.user_id,
      uid: user.user_id,
      name: user.name,
      displayName: user.name,
      email: user.email,
      companiesData: user.companiesData,
      role: user.userRole,
    };
  return user;
};

export const createUserRoleFromAccessRight = (userRoleAccessRight) => {
  let roles = ['user'];
  localStorage.setItem('isManagement', userRoleAccessRight.is_management);
  try {
    if (userRoleAccessRight) {
      if (userRoleAccessRight.type == 'ADMIN') {
        return ['ADMIN'];
      } else {
        for (let i = 0; i < userRoleAccessRight?.access_rights.length; i++) {
          let access_right = userRoleAccessRight.access_rights[i];

          if (access_right.view_access) {
            roles.push(access_right.name + '_' + 'view');
          }
          if (access_right.create_access) {
            roles.push(access_right.name + '_' + 'create');
          }
        }
        return roles;
      }
    }
  } catch (error) {
    console.log('🔴️ => createUserRoleFromAccessRight => error', error);
  }
};
