import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const NewsBreadcrumb = (item = { title: '', path: '' }) => {
  return (
    <Breadcrumb spacing="16px" fontSize="12px" color="#23639D" separator={<ChevronRightIcon color="gray.500" />}>
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

const NewsListBreadcrumb = () => {
  return (
    <Breadcrumb spacing="16px" fontSize="12px" color="#23639D" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">首頁</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/news" isCurrentPage>
          最新消息
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

const PressBreadcrumb = (item = { title: '', path: '' }) => {
  return (
    <Breadcrumb spacing="16px" fontSize="12px" color="#23639D" separator={<ChevronRightIcon color="gray.500" />}>
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

const PressListBreadcrumb = () => {
  return (
    <Breadcrumb spacing="16px" fontSize="12px" color="#23639D" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">首頁</BreadcrumbLink>
      </BreadcrumbItem>
      ㄌ
      <BreadcrumbItem>
        <BreadcrumbLink href="/press" isCurrentPage>
          會員通訊
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export { NewsBreadcrumb, NewsListBreadcrumb, PressBreadcrumb, PressListBreadcrumb };
