export const goToHomePage = (navigate) => {
    navigate(`/`)
}
export const goToAdminHomePage = (navigate) => {
    navigate(`/admin/trips/list`)
}
export const goToListTripsPage = (navigate) => {
    navigate(`/trips/list`)
}
export const goToApplicationFormPage = (navigate) => {
    navigate(`/trips/application/NoIFVcOiSgTKTIPVZwXS`)
}
export const goToLoginPage = (navigate) => {
    navigate(`/login`)
}
export const goToCreateTripPage = (navigate) => {
    navigate(`/admin/trips/create`)
}
export const goToListTripsPageDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}
export const goToBack = (navigate) => {
    navigate(-1)
}