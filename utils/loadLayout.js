import { headerActions, footerActions } from 'reducer'

export const loadLayout = (headerFetching, footerFetching, dispatch) => {
  if (headerFetching) {
    dispatch(headerActions.getHeader())
  }

  if (footerFetching) {
    dispatch(footerActions.getFooter())
  }
}
