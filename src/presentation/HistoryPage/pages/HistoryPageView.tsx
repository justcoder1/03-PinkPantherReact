import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorHandler, SkeletonMain } from '../../../_utils/globals/components/Fallbacks/Fallbacks';
import AuthenticatedLayout from '../../_AuthenticatedLayout/pages/Authenticated/AuthenticatedLayoutView';
import HistoryPageLayout from '../components/HistoryPageLayout/HistoryPageLayout';

interface I_HistoryPage {}

const HistoryPage: React.FC<React.PropsWithChildren<I_HistoryPage>> = () => {
  return (
    <AuthenticatedLayout>
      <ErrorBoundary fallback={<ErrorHandler />}>
        <Suspense fallback={<SkeletonMain />}>
          <HistoryPageLayout />
        </Suspense>
      </ErrorBoundary>
    </AuthenticatedLayout>
  );
};

export default HistoryPage;
