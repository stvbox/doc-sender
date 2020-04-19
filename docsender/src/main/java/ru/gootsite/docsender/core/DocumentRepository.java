package ru.gootsite.docsender.core;

import java.util.List;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DocumentRepository<T extends BaseDocument> extends JpaRepository<T, Long> {

    @Query("select doc from #{#entityName} doc where doc.status = ?1")
    public List<T> findByStatus(String status);

    List<BaseDocument> findAllByCreatedBy(String createdBy, Pageable pageable);

}
