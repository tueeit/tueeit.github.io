import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const NewsBreadcrumb = (item = { title: '', path: '' }) => {
  return (
    <Breadcrumb spacing="16px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">首頁</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/news">最新消息</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href={`/news/${item.path}`}>{item.title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

const PressBreadcrumb = (item = { title: '', path: '' }) => {
  return (
    <Breadcrumb spacing="16px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">首頁</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/press">會員通訊</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href={`/press/${item.path}`}>{item.title}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export { NewsBreadcrumb, PressBreadcrumb };
