import { Home, Auth, NotFound } from '@/pages';
import { Students } from '@/pages/Students';
import { FC, ReactElement, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export enum PagesEnum {
	HOME = "/",
	AUTH = "/auth",
	STUDENTS = "/students",
	NOT_FOUND = "*"
}

const AppRouterPages: Record<PagesEnum, ReactElement> = {
	[PagesEnum.HOME] : <Home />,
	[PagesEnum.AUTH] : <Auth />,
	[PagesEnum.NOT_FOUND] : <NotFound />,
	[PagesEnum.STUDENTS] : <Students />
}

interface AppRouterProps {}
export const AppRouter: FC<AppRouterProps> = () => {
	return (
		<Suspense fallback={<>Loading ...</>}>
			<Routes>
				<Route path="/" element={<Home />} />
				{
					Object.entries(AppRouterPages).map(([path, element]) => (
						<Route path={path} element={element} key={path} />
					))
				}
			</Routes>
		</Suspense>
	)
}