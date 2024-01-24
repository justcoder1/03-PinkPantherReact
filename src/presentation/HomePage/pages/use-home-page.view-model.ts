import { ViewModelHook } from '../../../_utils/types/index';
import { useErrorHandler } from 'react-error-boundary';
import { useIntl } from 'react-intl';


export interface HomeViewModel {
  title: string;  
}

const useHomePageViewModel: ViewModelHook<
HomeViewModel
> = () => {
  const handleError = useErrorHandler();
  const intl = useIntl();

  try {
    const title = intl.formatMessage({
      id: 'title',
      description: 'page title',
      defaultMessage: 'Home',
    });

    return {
      title,
    };
  } catch (error) {
      handleError(error);
  }
}

export default useHomePageViewModel;
