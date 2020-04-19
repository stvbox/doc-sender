package ru.gootsite.docsender.core;

public class Response<T> {

    T data;
    boolean hasMore;
    private int pageNum;

    public Response(T data) {
        this.data = data;
    }

    public Response(T data, int pageNum, boolean hasMore) {
        this.data = data;
        this.hasMore = hasMore;
        this.pageNum = pageNum;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public boolean getHasMore() {
        return hasMore;
    }

    public void setHasMore(boolean hasMore) {
        this.hasMore = hasMore;
    }

    public int getPageNum() {
        return pageNum;
    }

    public void setPageNum(int pageNum) {
        this.pageNum = pageNum;
    }

}
