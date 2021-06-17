# Functions changed info

---------------diffs in libvma_libvma.so.8.9.4_abidiff.out:----------------

Functions changes summary: 0 Removed, 5 Changed (274 filtered out), 0 Added functions

Variables changes summary: 0 Removed, 0 Changed (13 filtered out), 0 Added variables



5 functions with some indirect sub-type change:



  [C]'function void Floyd_LogCircleInfo(Node)' at buffer_pool.cpp:234:1 has some indirect sub-type changes:

    parameter 1 of type 'typedef Node' has sub-type changes:

      underlying type 'mem_buf_desc_t*' changed:

        in pointed to type 'class mem_buf_desc_t' at mem_buf_desc.h:60:1:

          type size hasn't changed

          1 data member changes (2 filtered):

           type of 'ring_slave* mem_buf_desc_t::p_desc_owner' changed:

             in pointed to type 'class ring_slave' at ring_slave.h:159:1:

               type size hasn't changed

               1 base class change:

                 'class ring' at ring.h:73:1 changed:

                   type size hasn't changed

                   1 member function changes (10 filtered):

                     'method virtual bool ring::attach_flow(flow_tuple&, pkt_rcvr_sink*)' has some sub-type changes:

                       parameter 2 of type 'pkt_rcvr_sink*' has sub-type changes:

                         in pointed to type 'class pkt_rcvr_sink' at pkt_rcvr_sink.h:52:1:

                           type size hasn't changed

                           1 member function changes (2 filtered):

                             'method virtual void pkt_rcvr_sink::rx_add_ring_cb(flow_tuple_with_local_if&, ring*, bool)' has some sub-type changes:

                               parameter 2 of type 'ring*' has sub-type changes:

                                 pointed to type 'class ring' changed; details are being reported





                   no data member change (1 filtered);



               no member function changes (6 filtered);



               no data member changes (5 filtered);





  [C]'method uint32_t buffer_pool::find_lkey_by_ib_ctx_thread_safe(ib_ctx_handler*)' at buffer_pool.h:60:1 has some indirect sub-type changes:

    parameter 1 of type 'ib_ctx_handler*' has sub-type changes:

      in pointed to type 'class ib_ctx_handler' at ib_ctx_handler.h:57:1:

        type size hasn't changed

        1 data member changes (6 filtered):

         type of 'vma_ibv_device_attr_ex* ib_ctx_handler::m_p_ibv_device_attr' changed:

           in pointed to type 'typedef vma_ibv_device_attr_ex' at verbs_extra.h:144:1:

             underlying type 'struct ibv_device_attr_ex' at verbs.h:296:1 changed:

               type size changed from 3072 to 3200 (in bits)

               2 data member insertions:

                 'ibv_pci_atomic_caps ibv_device_attr_ex::pci_atomic_caps', at offset 3072 (in bits) at verbs.h:331:1

                 'uint32_t ibv_device_attr_ex::xrc_odp_caps', at offset 3136 (in bits) at verbs.h:332:1





  [C]'method virtual void cq_mgr::add_qp_rx(qp_mgr*)' at cq_mgr.cpp:244:1 has some indirect sub-type changes:

    parameter 1 of type 'qp_mgr*' has sub-type changes:

      in pointed to type 'class qp_mgr' at qp_mgr.h:94:1:

        type size hasn't changed

        2 member function changes (4 filtered):

          'method virtual int qp_mgr::prepare_ibv_qp(vma_ibv_qp_init_attr&)' has some sub-type changes:

            parameter 1 of type 'vma_ibv_qp_init_attr&' has sub-type changes:

              in referenced type 'typedef vma_ibv_qp_init_attr' at verbs_extra.h:126:1:

                underlying type 'struct ibv_qp_init_attr_ex' at verbs.h:877:1 changed:

                  type size changed from 1024 to 1088 (in bits)

                  1 data member insertion:

                    'uint64_t ibv_qp_init_attr_ex::send_ops_flags', at offset 1024 (in bits) at verbs.h:949:1

                  no data member changes (6 filtered);



          'method virtual cq_mgr* qp_mgr::init_rx_cq_mgr(ibv_comp_channel*)' has some sub-type changes:

            return type changed:

              in pointed to type 'class cq_mgr' at cq_mgr.h:95:1:

                type size hasn't changed

                no member function changes (5 filtered);



                1 data member changes (7 filtered):

                 type of 'ring_simple* cq_mgr::m_p_ring' changed:

                   in pointed to type 'class ring_simple' at ring_simple.h:58:1:

                     type size hasn't changed

                     1 base class change:

                       'class ring_slave' at ring_slave.h:159:1 changed:

                         details were reported earlier



                     no member function changes (9 filtered);



                     no data member changes (6 filtered);





        no data member changes (7 filtered);



  [C]'method sockinfo_tcp* sockinfo_tcp::accept_clone()' at sockinfo_tcp.cpp:2695:1 has some indirect sub-type changes:

    return type changed:

      in pointed to type 'class sockinfo_tcp' at sockinfo_tcp.h:116:1:

        type size hasn't changed

        1 base class change:

          'class sockinfo' at sockinfo.h:157:1 changed:

            type size hasn't changed

            1 base class changes (1 filtered):

              'class pkt_rcvr_sink' at pkt_rcvr_sink.h:52:1 changed:

                details were reported earlier



            no member function changes (10 filtered);



            no data member changes (5 filtered);



        no member function changes (7 filtered);



        no data member changes (2 filtered);



  [C]'function int vma_ib_mlx5dv_init_obj(mlx5dv_obj*, uint64_t)' at ib_mlx5_dv.cpp:41:1 has some indirect sub-type changes:

    parameter 1 of type 'mlx5dv_obj*' has sub-type changes:

      in pointed to type 'struct mlx5dv_obj' at mlx5dv.h:495:1:

        type size changed from 768 to 896 (in bits)

        1 data member insertion:

          'struct {ibv_pd* in; mlx5dv_pd* out;} mlx5dv_obj::pd', at offset 768 (in bits) at mlx5dv.h:523:1

        3 data member changes (3 filtered):

         type of 'struct {ibv_qp* in; mlx5dv_qp* out;} mlx5dv_obj::qp' changed:

           type size hasn't changed

           1 data member changes (1 filtered):

            type of 'mlx5dv_qp* out' changed:

              in pointed to type 'struct mlx5dv_qp' at mlx5dv.h:406:1:

                type size changed from 576 to 768 (in bits)

                5 data member insertions:

                  'uint32_t mlx5dv_qp::tirn', at offset 576 (in bits) at mlx5dv.h:424:1

                  'uint32_t mlx5dv_qp::tisn', at offset 608 (in bits) at mlx5dv.h:425:1

                  'uint32_t mlx5dv_qp::rqn', at offset 640 (in bits) at mlx5dv.h:426:1

                  'uint32_t mlx5dv_qp::sqn', at offset 672 (in bits) at mlx5dv.h:427:1

                  'uint64_t mlx5dv_qp::tir_icm_addr', at offset 704 (in bits) at mlx5dv.h:428:1





         type of 'struct {ibv_srq* in; mlx5dv_srq* out;} mlx5dv_obj::srq' changed:

           type size hasn't changed

           1 data member changes (1 filtered):

            type of 'mlx5dv_srq* out' changed:

              in pointed to type 'struct mlx5dv_srq' at mlx5dv.h:445:1:

                type size changed from 320 to 384 (in bits)

                1 data member insertion:

                  'uint32_t mlx5dv_srq::srqn', at offset 320 (in bits) at mlx5dv.h:452:1





         type of 'struct {ibv_dm* in; mlx5dv_dm* out;} mlx5dv_obj::dm' changed:

           type size hasn't changed

           1 data member changes (1 filtered):

            type of 'mlx5dv_dm* out' changed:

              in pointed to type 'struct mlx5dv_dm' at mlx5dv.h:472:1:

                type size changed from 192 to 256 (in bits)

                1 data member insertion:

                  'uint64_t mlx5dv_dm::remote_va', at offset 192 (in bits) at mlx5dv.h:476:1









